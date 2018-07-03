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
    ADMIN_PESERTA_CEO: '/dashboard/admin/peserta/ceo',
    ADMIN_PESERTA_EC: '/dashboard/admin/peserta/ec',
    ADMIN_PESERTA_HSFC: '/dashboard/admin/peserta/hsfc',
    CEO: '/dashboard/ceo',
    CEO_EDIT_MEMBER: '/dashboard/ceo/edit-member/:step'
};

export {
    ROOT, 
    REGISTER, 
    LOGIN, 
    PAYMENT, 
    DASHBOARD
};