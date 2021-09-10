import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import * as S from './styles';
import { GlobalContext } from '../../contexts/GlobalContext';

const ShowModal = ({
  open,
  handleClose,
  quantity,
  setQuantity,
  addItemToCart,
  actualId,
  restaurantId,
  data,
}) => {
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  const { actualRestaurant, setActualRestaurant } =
    React.useContext(GlobalContext);

  const placeOrder = () => {
    if (actualRestaurant.id === '' || actualRestaurant.id === restaurantId) {
      if (quantity > 0) {
        addItemToCart(actualId, quantity);
        handleClose();
        setActualRestaurant({
          id: restaurantId,
          deliveryTime: data.deliveryTime,
          shipping: data.shipping,
          address: data.address
        });
      }
    } else {
      alert('Remova os itens de outro restaurante do carrinho');
    }
    console.log(actualRestaurant)

  };

  const body = (
    <S.BodyModal>
      <p>Selecione a quantidade desejada</p>
      <FormControl fullWidth variant='outlined' color={'secondary'}>
        <InputLabel>Quantidade desejada</InputLabel>
        <Select
          value={quantity}
          onChange={handleChange}
          label='Quantidade desejada'
        >
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </FormControl>
      <Button color={'primary'} onClick={placeOrder}>
        Adicionar ao carrinho
      </Button>
    </S.BodyModal>
  );

  return (
    <div>
      <S.SModal
        open={open}
        onClose={handleClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
      >
        {body}
      </S.SModal>
    </div>
  );
};

export default ShowModal;
