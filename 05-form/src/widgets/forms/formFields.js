import React from 'react';

const FormFields = ({formData,change,onblur})=>{
    const renderFields =(formData)=>{
        const formArray = [];
        for (let elementName in formData){
            formArray.push({
                id:elementName,
                setting: formData[elementName]
            })
        }
        return formArray.map((item,i)=>{
            return (
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }
    const showLabel =(show,text)=>{
        if(show){
            return <label>{text}</label>
        }
        return null
    }
    const validate = (element)=>{
        let error = [true,'']
        if(!element.validation){
            return  error
        }
        if(element.validation.required){
            const valid = element.value.trim()!== '';
            const message = `${!valid? 'this field is required':''}`
            error =!valid ?[valid,message]:error
        }

        if(element.validation.minLen){
            const valid = element.value.trim().length>=element.validation.minLen;
            const message = `${!valid? 'this field must greater than 5 chars':''}`
            error =!valid ?[valid,message]:error            
        }

        return error;

    }
    const changeHandler = (e,id,touched)=>{
        const newState = formData;
        newState[id].value=e.target.value;

        // validation 
        if(touched){
            let validData = validate(newState[id])
            newState[id].valid=validData[0]
            newState[id].validationMessage = validData[1]
        }
        newState[id].touched=touched
        change(newState)
    }

    const showValidation = (data) =>{
        let errorMessage = null;
        if (data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )
        }
        return errorMessage
    }


    const renderTemplates = (data)=>{
        let formTemplate = null;
        let values = data.setting;

        switch(values.element){
            case ("input"):
            formTemplate=(
                <div>
                    {showLabel(values.label, values.labelText)}
                    <input 
                        {...values.config}
                        onBlur={e=>changeHandler(e,data.id,true)}
                        onChange={e=>changeHandler(e,data.id,false)}
                        value={values.value}/>
                    {showValidation(values)}
                </div>
            )
            break;
            case ("textarea"):
            formTemplate=(
                <div>
                    {showLabel(values.label, values.labelText)}
                    <textarea 
                        {...values.config} 
                        onChange={e=>changeHandler(e,data.id)}
                        value={values.value}/>
                    {showValidation(values)}
                </div>
            )
            break; 
            case ("select"):
            formTemplate=(
                <div>
                    {showLabel(values.label, values.labelText)}
                    <select 
                        name={values.config.name}
                        onChange={e=>changeHandler(e,data.id)}
                        value={values.value}>
                        {values.config.options.map((o,i)=>(
                            <option key={i} value={o.val}>{o.text}</option>
                        ))}
                    </select>
                    {showValidation(values)}
                </div>
            )
            break;             
            default:
            formTemplate=null;

        }
        return formTemplate
    }
    
    return(
        <div>
            {renderFields(formData)}
        </div>
    )
}

export default FormFields;