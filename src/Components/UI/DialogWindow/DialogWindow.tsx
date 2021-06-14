import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Redirect } from 'react-router-dom';

type DialogWindowProps = {
    submitHandle: (some: string) => any,
    redirect?: string,
}

export const DialogWindow: React.FC<DialogWindowProps> = (props) => {
    const [open, setOpen] = React.useState(false);

    const inputRefCity = useRef<HTMLInputElement>(null);
    const inputRefStreet = useRef<HTMLInputElement>(null);
    const inputRefHouse = useRef<HTMLInputElement>(null);
    const inputRefIndex = useRef<HTMLInputElement>(null);


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const succesSubmit = () => {
        const city = inputRefCity.current?.value?.trim();
        const street = inputRefStreet.current?.value?.trim();
        const house = inputRefHouse.current?.value?.trim();
        const indexPost = inputRefIndex.current?.value?.trim();
        
        if(!Boolean(city) || !Boolean(street) || !Boolean(house) || !Boolean(indexPost)) return

        const address = `Город: ${inputRefCity.current?.value}, улица: ${inputRefStreet.current?.value}, дом: ${inputRefHouse.current?.value}, индекс: ${inputRefIndex.current?.value}`;
        
        props.submitHandle(address!)
        setOpen(false);
        if(props.redirect == '')
        {
        <Redirect to={props.redirect!}/>
        }
    }



    return (
        <div>
            <Button variant="outlined" color="secondary" size="large" onClick={handleClickOpen}>
                Заказать
            </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Адрес доставки</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Введите адрес доставки, куда должен быть доставлен ваш заказ.
        </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="city"
                        label="Город"
                        type="email"
                        fullWidth
                        color="secondary"
                        InputProps={{inputProps: {ref: inputRefCity}}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="street"
                        label="Улица"
                        type="email"
                        fullWidth
                        color="secondary"
                        InputProps={{inputProps: {ref: inputRefStreet}}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="house"
                        label="Дом"
                        type="email"
                        fullWidth
                        color="secondary"
                        InputProps={{inputProps: {ref: inputRefHouse}}}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="indexPost"
                        label="Индекс"
                        type="email"
                        fullWidth
                        color="secondary"
                        InputProps={{inputProps: {ref: inputRefIndex}}}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Отмена
                    </Button>
                    <Button onClick={succesSubmit} color="secondary" variant="contained">
                        Подтвердить
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}