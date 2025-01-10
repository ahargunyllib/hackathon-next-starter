import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { login } from "../actions/auth";
import { LoginSchema } from "../types/schema";

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
		toast.promise(login(data), {
			loading: "Logging in...",
			success: (res) => {
				router.push("/dashboard");
				return "Logged in successfully!";
			},
			error: (err) => {
				console.log(err.message);
				return err.message;
			},
		});
	});

	return {
		...form,
		onSubmitHandler,
	};
};
