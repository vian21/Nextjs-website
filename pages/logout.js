import Cookies from 'js-cookie'

export default function Logout() {

    //unset cookie
    Cookies.remove('token')

    //redirect to main window
    window.location.href = "/"
    return{}
}