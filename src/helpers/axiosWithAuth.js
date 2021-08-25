import axios from "axios";

const axiosWithAuth= () => {
	const token = localStorage.getItem('token');

    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: "https://bw-water-my-plants-01.herokuapp.com"
    })
}

export default axiosWithAuth