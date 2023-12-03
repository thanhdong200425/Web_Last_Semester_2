function logoutHandle() {
    localStorage.removeItem('assessToken');
    localStorage.removeItem('user_id');
    localStorage.removeItem('user_username');
    localStorage.removeItem('user_avatar');
    window.location.pathname = '/';
}

export default logoutHandle;
