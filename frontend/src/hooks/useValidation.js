import {useState} from 'react';

const useValidation = () => {
    const [errors, setErrors] = useState([])

    const validate = (input, constraintLength) => {
        if (input.length <= constraintLength) {
            setErrors([`Password length must be more than ${constraintLength} characters`])
        } else {
            setErrors([])
        }
    }

    return {errors, validate}
}

export default useValidation;

//  v2

// import {useState} from 'react';

// const useValidation = (input, constraintLength) => {
//     const [errors,setErrors] = useState('')

//     if (input.length <= constraintLength) {
//         setErrors(`Password length must be more than ${constraintLength} characters`)
//     }
//     return {errors}
// }

// export default useValidation;