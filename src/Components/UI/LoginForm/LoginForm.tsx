import { FC } from 'react';
import {
    TextField,
    Button,
    Card,
    Box,
} from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useHistory } from 'react-router';

import "./LoginForm.scss";


type LoginFormProps = {
    urlAction: string
}

type FormType = {
    login: string
    password: string
}

export const LoginForm: FC<LoginFormProps> = (props) => {
    const {
        register,
        handleSubmit,
        errors
    } = useForm<FormType>();

    const history = useHistory();

    const onLogin = async (data: FormType) => {
        const response = await axios.post('http://localhost:5000/redirect/login', data);

        if(response.data.login != "Вы не вошли")
        {
            history.push("/");
        }
    }
 
    return (
        <div className="container">
           
            <div className="box">
            <Card elevation={5}>
                <Box p={1}>
                <h1>Авторизация</h1>
                    <div className="input-group">
                        <TextField 
                            inputProps={{
                                ref:register({
                                    required: {
                                        value: true,
                                        message: 'Поле обязательно'
                                    },
                                })
                            }}
                            name="login"
                            helperText={errors.login?.message}
                            error={!!errors.login}
                            fullWidth
                        />

                    </div>
                    <div className="input-group">
                        <TextField 
                            inputProps={{
                                ref:register({
                                    required: true,
                                })
                            }}
                            name="password"
                            helperText={errors.password && "Вы не ввели пароль"}
                            error={!!errors.password}
                            type="password"
                            fullWidth
                        />
                    </div>
                    <Box textAlign="center">
                        <Button 
                            onClick={handleSubmit(onLogin)}
                            variant="contained"
                            color="primary"
                        >
                            Войти
                            
                        </Button>
                    </Box>
                    </Box>
                </Card>
            </div>
        </div>
    );
}