import { useState } from "react";
import jsonp from "jsonp";

interface IMailChimpResult {
    handleSubmit: (email: string) => void;
    success: boolean;
    reset: () => void;
    loading: boolean;
    error: boolean;
    message: string;
}

export function useMailChimp(): IMailChimpResult {
    const initStatusState = {
        loading: false,
        error: false,
        success: false
    };
    const [status, setStatus] = useState(initStatusState);
    const [message, setMessage] = useState("");

    // eslint-disable-next-line
    const handleSubmit = (email: string): void => {
        const url = new URL('https://tech.us2.list-manage.com/subscribe/post-json?u=a0b44ec84446f8cda61080c38&amp;id=0cf01521a8&name=user')
        url.searchParams.append('EMAIL', email)
        setStatus({ ...status, loading: true });
        setMessage("");
        jsonp(url.href, { param: "c" }, (error, data) => {
            if (error) {
                setStatus({ ...initStatusState, error: true });
                setMessage(error.message);
            } else {
                if (data.result !== "success") {
                    setStatus({ ...initStatusState, error: true });
                } else {
                    setStatus({ ...initStatusState, success: true });
                }
                setMessage(data.msg);
            }
        });
    };

    const reset: () => void = async () => {
        await setMessage("");
        await setStatus(initStatusState);
    };

    return {
        loading: status.loading,
        success: status.success,
        error: status.error,
        message,
        handleSubmit,
        reset
    };
};
