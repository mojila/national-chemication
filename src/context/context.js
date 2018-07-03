import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import {auth,database,storage} from './../firebase/firebase';

const MyContext = React.createContext();

const INITIAL_STATE = {
    ecRegister: {
        error: null,
        judulKarya: '',
        namaInstitusiPendidikan: '',
        alamatInstitusiPendidikan: '',
        telpOrFaxInstitusiPendidikan: '',
        emailInstitusiPendidikan: ''
    },
    ceoRegister: {
        error: null,
        uid: '',
        namaTim: '',
        sekolah: '',
        email: '',
        contact: '',
        passwordOne: '',
        passwordTwo: '',
        lunas: false,
        isLoading: false,
        isSuccess: false,
        buktiPembayaran: ''
    },
    ceoLogin: {
        error: null,
        email: '',
        password: '',
        isLoading: false
    },
    ceoPayment: {
        sekolah: '',
        namaTim: '',
        file: ''
    }
};

class Provider extends Component {
    constructor(props) {
        super(props);

        this.onEcRegisterJudulKaryaChange = 
            this.onEcRegisterJudulKaryaChange.bind(this);
        this.onEcRegisterNamaInstitusiPendidikan =
            this.onEcRegisterNamaInstitusiPendidikan.bind(this);
        this.onEcRegisterAlamatInstitusiPendidikan =
            this.onEcRegisterAlamatInstitusiPendidikan.bind(this);
        this.onEcRegisterTelpOrFaxInstitusiPendidikan =
            this.onEcRegisterTelpOrFaxInstitusiPendidikan.bind(this);
        this.onEcRegisterEmailInstitusiPendidikan =
            this.onEcRegisterEmailInstitusiPendidikan.bind(this);
        // CEO Login
        this.onCeoLogin = this.onCeoLogin.bind(this);
        this.onCeoLoginEmail = this.onCeoLoginEmail.bind(this);
        this.onCeoLoginPassword = this.onCeoLoginPassword.bind(this);
        // CEO Register
        this.onCeoRegisterNamaTim = this.onCeoRegisterNamaTim.bind(this);
        this.onCeoRegister = this.onCeoRegister.bind(this);
        this.onCeoRegisterEmail = this.onCeoRegisterEmail.bind(this);
        this.onCeoRegisterPasswordOne = this.onCeoRegisterPasswordOne.bind(this);
        this.onCeoRegisterPasswordTwo = this.onCeoRegisterPasswordTwo.bind(this);
        this.onCeoRegisterSekolah = this.onCeoRegisterSekolah.bind(this);
        this.onCeoRegisterContact = this.onCeoRegisterContact.bind(this);
        // CEO Payment
        // this.onCeoPaymentSekolah = this.onCeoPaymentSekolah.bind(this);
        // this.onCeoPaymentNamaTim = this.onCeoPaymentNamaTim.bind(this);
        this.onCeoPaymentFile = this.onCeoPaymentFile.bind(this);
        this.onCeoPayment = this.onCeoPayment.bind(this);

        this.state = {...INITIAL_STATE};
    }

    componentDidMount() {
        let {ceoPayment} = this.state;
        
        database.ref('/buktiPembayaran/file').once('value').then((snap) => {
            ceoPayment.file = snap.val();

            this.setState({...ceoPayment});
        })
    }

    // CEO Payment
    onCeoPaymentFile(e) {
        let {ceoPayment} = this.state;

        if (e.target.files && e.target.files[0]) {
            let reader = new FileReader();

            reader.onload = (e) => {
                ceoPayment.file = e.target.result;

                this.setState({...ceoPayment});
            };

            reader.readAsDataURL(e.target.files[0]);
        }
    }
    onCeoPayment(e) {
        let {ceoPayment} = this.state;
        let {file} = ceoPayment;

        database.ref('/buktiPembayaran').set({
            file
        });

        e.preventDefault();
    }

    // CEO Register
    onCeoRegisterNamaTim(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.namaTim = value;

        this.setState({...ceoRegister});
    }
    onCeoRegisterEmail(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.email = value;

        this.setState({...ceoRegister});
    }
    onCeoRegisterPasswordOne(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.passwordOne = value;

        this.setState({...ceoRegister});
    }
    onCeoRegisterPasswordTwo(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.passwordTwo = value;

        this.setState({...ceoRegister});
    }
    onCeoRegisterSekolah(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.sekolah = value;

        this.setState({...ceoRegister});
    }
    onCeoRegisterContact(e) {
        let {ceoRegister} = this.state;
        let {value} = e.target;

        ceoRegister.contact = value;

        this.setState({...ceoRegister});
    }
    onCeoRegister(e) {
        let {ceoRegister} = this.state;
        let {
            email,
            passwordOne, 
            namaTim, 
            sekolah,
            contact,
            lunas,
            buktiPembayaran
        } = ceoRegister;

        ceoRegister.isLoading = true;
        this.setState({...ceoRegister});

        auth.createUserWithEmailAndPassword(email,passwordOne)
        .then(() => {
            database.ref('pesertaCeo/' + auth.currentUser.uid).set({
                namaTim,
                email,
                sekolah,
                contact,
                lunas,
                buktiPembayaran
            });

            ceoRegister.isLoading = false;
            ceoRegister.isSuccess = true;

            this.setState({...ceoRegister});
        })
        .catch(error => {
            ceoRegister.error = error;
            ceoRegister.isLoading = false;

            this.setState({...ceoRegister});
        });

        e.preventDefault();
    }

    // CEO Login 
    onCeoLoginEmail(e) {
        let {ceoLogin} = this.state;
        let {value} = e.target;

        ceoLogin.email = value;

        this.setState({...ceoLogin});
    }
    onCeoLoginPassword(e) {
        let {ceoLogin} = this.state;
        let {value} = e.target;

        ceoLogin.password = value;

        this.setState({...ceoLogin});
    }
    onCeoLogin(e) {
        let {ceoLogin} = this.state;
        let {email,password} = ceoLogin;
        
        ceoLogin.isLoading = true;
        this.setState({...ceoLogin});

        auth.signInWithEmailAndPassword(email,password)
        .then(() => {
            let uid = auth.currentUser.uid;

            database.ref('/pesertaCeo/' + uid).once('value')
            .then((snapshot) => {
                if(snapshot.val() !== null) {
                    localStorage.setItem('uid', uid);

                    ceoLogin.isLoading = false;
                    this.setState({...ceoLogin});

                    this.props.history.push('/dashboard/ceo');
                } else {
                    ceoLogin.error = {
                        message: 'Data Pengguna Tidak Ditemukan'
                    };
                    ceoLogin.isLoading = false;

                    this.setState({...ceoLogin});
                }
            })
            .catch(error => {
                ceoLogin.isLoading = false;

                this.setState({...ceoLogin});
            })
        })
        .catch(error => {
            ceoLogin.error = error;
            ceoLogin.isLoading = false;

            this.setState({...ceoLogin});
        });

        e.preventDefault();
    }

    // EC Register
    onEcRegisterJudulKaryaChange(e) {
        let {ecRegister} = this.state;
        let value = e.target.value;

        ecRegister.judulKarya = value;

        this.setState({...ecRegister});
    }

    onEcRegisterNamaInstitusiPendidikan(e) {
        let {ecRegister} = this.state;
        let value = e.target.value;

        ecRegister.namaInstitusiPendidikan = value;

        this.setState({...ecRegister});
    }

    onEcRegisterAlamatInstitusiPendidikan(e) {
        let {ecRegister} = this.state;
        let value = e.target.value;

        ecRegister.alamatInstitusiPendidikan = value;

        this.setState({...ecRegister});
    }

    onEcRegisterTelpOrFaxInstitusiPendidikan(e) {
        let {ecRegister} = this.state;
        let value = e.target.value;

        ecRegister.telpOrFaxInstitusiPendidikan = value;

        this.setState({...ecRegister});
    }

    onEcRegisterEmailInstitusiPendidikan(e) {
        let {ecRegister} = this.state;
        let value = e.target.value;

        ecRegister.emailInstitusiPendidikan = value;

        this.setState({...ecRegister});
    }

    render() {
        let {
            ecRegister,
            ceoLogin,
            ceoRegister,
            ceoPayment
        } = this.state;

        return <MyContext.Provider
            value={{
                ecRegister: {
                    ...ecRegister,
                    onJudulKaryaChange: 
                        this.onEcRegisterJudulKaryaChange,
                    onNamaInstitusiPendidikan: 
                        this.onEcRegisterNamaInstitusiPendidikan,
                    onAlamatInstitusiPendidikan: 
                        this.onEcRegisterAlamatInstitusiPendidikan,
                    onTelpOrFaxInstitusiPendidikan:
                        this.onEcRegisterTelpOrFaxInstitusiPendidikan,
                    onEmailInstitusiPendidikan:
                        this.onEcRegisterEmailInstitusiPendidikan
                },
                ceoLogin: {
                    ...ceoLogin,
                    onEmailChange:
                        this.onCeoLoginEmail,
                    onPasswordChange:
                        this.onCeoLoginPassword,
                    onLogin:
                        this.onCeoLogin
                },
                ceoRegister: {
                    ...ceoRegister,
                    onNamaTimChange:
                        this.onCeoRegisterNamaTim,
                    onEmailChange:
                        this.onCeoRegisterEmail,
                    onRegister:
                        this.onCeoRegister,
                    onPasswordOneChange:
                        this.onCeoRegisterPasswordOne,
                    onPasswordTwoChange:
                        this.onCeoRegisterPasswordTwo,
                    onSekolahChange:
                        this.onCeoRegisterSekolah,
                    onContactChange:
                        this.onCeoRegisterContact
                },
                ceoPayment: {
                    ...ceoPayment,
                    onFileChange:
                        this.onCeoPaymentFile,
                    onCeoPayment:
                        this.onCeoPayment
                }
            }}
        >
            {this.props.children}
        </MyContext.Provider>;
    }
}

const Consumer = MyContext.Consumer;

export default withRouter(Provider);
export {
    Consumer
};