
import {Link} from 'react-router-dom'
const Auth = () => {
    
    return (
        <div className="space-y-2 text-center pt-5">
            <h1 className="text-3xl font-bold">Sign up</h1>
            <p className="text-gray-500 dark:text-gray-400">
            Already have an account?
            <Link className="underline" to="/signin">
                Sign in
            </Link>
            </p>
        </div>
    )
}

export default Auth