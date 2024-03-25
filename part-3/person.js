const Person = ({ name, age, hobbies }) => (
    <div>
        <p>Learn some information about this person</p>
        <h3><b>Can you vote?</b></h3>
        <h3><i>{age >= 18 ? "please go vote!" : "you must be 18"}</i></h3>
        <h3><b>Your name (if your name is longer than 8 characters, only the first six will be displayed):</b></h3>
        <h3><i>{name.length > 8 ? name.slice(0,6) : name }</i></h3>
        <h3>Your hobbies are:</h3>
        <ul>
            {hobbies.map(hobby => <li>{hobby}</li>)}
        </ul>
    </div>
)