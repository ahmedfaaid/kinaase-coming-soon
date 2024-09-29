import { supabase } from '$lib/supabaseClient';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		const email = formData.get('email');

		try {
			const { data, error } = await supabase
				.from('emails')
				.upsert([
					{
						email
					}
				])
				.select();

			console.log({ error });
			console.log({ data });

			if (error) {
				return fail(500, {
					message: 'There was an error. Please try again.',
					email,
					error: true
				});
			}

			return {
				message: 'You have successfully subscribed for updates from Kinaase.',
				email: data[0].email,
				error: false
			};
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (_error) {
			return fail(500, {
				email,
				error: true
			});
		}
	}
};
