const ROOT = '/';

const REGISTER = {
    ROOT: '/daftar',
    CEO: '/daftar/ceo',
    EC: '/daftar/ec/:step',
    HSFC: '/daftar/hsfc/:step'
};

const LOGIN = {
    ADMIN: '/login/admin',
    CEO: '/login/ceo'
};

const PAYMENT = {
    CEO: '/payment/ceo',
    HSFC: '/payment/hsfc'
};

const DASHBOARD = {
    ADMIN: '/dashboard/admin',
    CEO: '/dashboard/ceo',
    CEO_EDIT_MEMBER: 'dashboard/ceo/edit-member'
};

export {
    ROOT, 
    REGISTER, 
    LOGIN, 
    PAYMENT, 
    DASHBOARD
};