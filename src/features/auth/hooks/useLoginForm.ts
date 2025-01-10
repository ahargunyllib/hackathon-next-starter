import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { login } from "../actions/auth";

const LoginSchema = z.object({
	email: z.string().email("Invalid email address"),
	password: z.string().min(6),
});

export const useLoginForm = () => {
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmitHandler = form.handleSubmit(async (data) => {
		const res = await login(data);
		if (res.success) {
			toast.success(res.message);
			router.push("/dashboard");
		} else {
			toast.error(res.message);
			console.log(res.message);
		}
	});

	return {
		...form,
		onSubmitHandler,
	};
};
