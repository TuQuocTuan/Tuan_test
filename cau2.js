async function fetchUserData() {
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if(!response.ok){
        throw new Error('HTTP error status: ' + response.status);
    }
    const user = await response.json();
    return user.map(user => ({
        name: user.name,
        email: user.email,
        companyName: user.company.name
    }));
    }
    catch(error){
        console.error('Fetch dữ liệu bị lỗi: ', error);
        return [];
    }

}
fetchUserData().then(users => console.log(users));