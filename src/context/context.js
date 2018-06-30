import React, {Component} from 'react';

const MyContext = React.createContext();

const INITIAL_STATE = {
    ecRegister: {
        error: null,
        judulKarya: '',
        namaInstitusiPendidikan: '',
        alamatInstitusiPendidikan: '',
        telpOrFaxInstitusiPendidikan: '',
        emailInstitusiPendidikan: ''
    }
};

const byKeyProp = (propertyName, value) => () => ({
    [propertyName]: value
});

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

        this.state = {...INITIAL_STATE};
    }

    // Ec Register
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
        let {ecRegister} = this.state;

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
                }
            }}
        >
            {this.props.children}
        </MyContext.Provider>;
    }
}

const Consumer = MyContext.Consumer;

export {
    Provider,
    Consumer
};