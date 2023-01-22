
export const storeToken = (userInfo) => {
    const data = JSON.stringify(userInfo)
    window.localStorage.setItem("userInfo", data)
}

export const getToken = () => {
    let data = window.localStorage.getItem("userInfo")
    const token = JSON.parse(data)?.token
    return token
}

