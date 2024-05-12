import axios from "axios"
import { toast } from 'react-toastify'

export default async function EmailSender({userEmail,name,applierTeamEmail,applierTeamName,applierTeamDescription,setLoader}){
    if (userEmail === applierTeamEmail) {
        toast.error('You cannot apply for your own Team.')
    } else {
        const requestData = {
            userEmail,
            name,
            applierTeamEmail,
            applierTeamName,
            applierTeamDescription,
        }

        await axios.post('/api/invite-email', requestData)

        setLoader(false)
        toast.success('Email Sent Successfully')
    }
}