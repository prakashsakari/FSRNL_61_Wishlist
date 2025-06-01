const FormInput = ({text, type, placeholder}) => {
    return (
        <div>
            <label>
                <span>{text}</span>
                <input type={type} placeholder={placeholder} />
            </label>
        </div>
    )
}

const formInput = [
    {id:1, text: 'Enter name: ', type: 'text', placeholder:"Prakash Sakari"},
    {id:2, text: 'Enter emailId: ', type: 'email', placeholder:"ps@gmail.com"},
    {id:3, text: 'Enter password: ', type: 'password', placeholder:"*****"},
]

function App (){ //App is a parent component
    return (
        <>
            {
                formInput.map(({id, type, text, placeholder}) => <FormInput key={id} text={text} type={type} placeholder={placeholder} />)
            }
        </>
    )
}

export default App;