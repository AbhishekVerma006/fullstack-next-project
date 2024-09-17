import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponce";
import { url } from "inspector";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode: string,
): Promise<ApiResponse>{
    try {
        await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: email,
            subject: "Mystry message | Verification code ",
            react:VerificationEmail({username,otp:verifyCode})
        });
        return {success: true, message: "Verification email send successfully"}
    } catch (emailError) {
        console.log("error sending verification ",emailError);
        return {success : false, message: "failed to send verification email"}
    }
}