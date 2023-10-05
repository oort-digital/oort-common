import {Form, Modal, FormRule} from "antd";
import {useMailChimp} from "./useMailchimp";
import {useEffect} from "react";
import {SubscribeControl, SubscribeType} from "./subscribeControl";

interface IProps {
    style?: SubscribeType
    className?: string
}

export interface IFormValues {
    email: string
}

export const Subscribe = ({ className, style }: IProps) => {
    const {loading, error, success, message, handleSubmit} = useMailChimp()
   
    const onFinish = (values: IFormValues) => {
        handleSubmit(values.email)
    }

    useEffect(() => {
        if (!loading && message && error) {
            Modal.error({
                title: "Subscribe mail error",
                content: message
            })
        }

        if (!loading && message && success) {
            Modal.success({
                title: "Subscribe mail success",
                content: message
            })
        }

    }, [message, error, loading, success])


    const requiredRule: FormRule = {
        required: true,
        message: 'Email is required'
    }

    const emailRule: FormRule = {
        type: 'email',
        message: 'Email is not valid'
    }

    return <Form
        className={className}
        onFinish={onFinish}>
        <Form.Item name="email" rules={[requiredRule, emailRule]}>
            <SubscribeControl style={style} loading={loading} placeholder="Enter your email" />
        </Form.Item>
    </Form>
}