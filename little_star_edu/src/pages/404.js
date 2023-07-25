import {useRouter} from 'next/router';

const ErrorPage = () => {
    const router = useRouter();
    setTimeout(()=>{
        router.push("/")
    },3000)

    return (
        <div>
            <h1>404</h1>
            <h2>Route not found</h2>
        </div>
    );
};

export default ErrorPage;