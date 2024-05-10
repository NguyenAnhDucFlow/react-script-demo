
type GreetProps = {
    name: string
    messageCount?: number
    isLoggedIn: boolean
}

const Greet = ({ name, isLoggedIn, messageCount }: GreetProps) => {

    messageCount = 0;

    return (
        <div>
            <h2>
                {isLoggedIn
                    ? `Welcome ${name}! You have ${messageCount} unread message`
                    : "Welcome guest"
                }</h2>
        </div>
    )
}

export default Greet