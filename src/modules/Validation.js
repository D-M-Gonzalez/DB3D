export function blurSignupValidation(userData,setUserData,event){
    !event.currentTarget.value ? setUserData({...userData,
            [event.currentTarget.id]:{...userData[event.currentTarget.id],
                error:true,
                errorText:`Se requiere ${userData[event.currentTarget.id].label}`
        }}) 
        :
        setUserData({...userData,
            [event.currentTarget.id]:{...userData[event.currentTarget.id],
                error:false,
                errorText:"",
        }}) 

    event.currentTarget.id === 'repemail' &&
        (userData.email.data === event.currentTarget.value ?
            setUserData({...userData,
                repemail:{...userData.repemail,
                    error:false,
                    errorText:"",
                }})
            : 
            setUserData({...userData,
                repemail:{...userData.repemail,
                    error:true,
                    errorText:"Los email no coinciden",
                }}))		

    event.currentTarget.id === 'reppassword' &&
        (userData.password.data === event.currentTarget.value ?
            setUserData({...userData,
                reppassword:{...userData.reppassword,
                    error:false,
                    errorText:"",
                }})
            : 
            setUserData({...userData,
                reppassword:{...userData.reppassword,
                    error:true,
                    errorText:"Las password no coinciden",
                }}))

}

export function changeSignupValidation(userData,setUserData,event){
    setUserData({...userData,
        [event.target.id]:{...userData[event.target.id],
            data:event.target.value,
            error:false,
            errorText:"",
        }})
}

export function submitValidation(userData,setUserData,mode){
    let newUserData = userData
    let error = false
    for(const key in newUserData){
        if(!newUserData[key].data && newUserData[key].mode.indexOf(mode) > -1){
            newUserData[key].error = true;
            error = true;
            newUserData[key].errorText = `Se requiere ${newUserData[key].label}`
        } else if ( newUserData[key].error === true && newUserData[key].mode.indexOf(mode) > -1){
            error = true;
        }
    }
    setUserData({...newUserData})
    return error   
}