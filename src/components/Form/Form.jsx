import { Btn } from '../kit/Btn/Btn';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addInputDataForm, inputDataFormSelector } from '../../redux/slice/contentSlice';
import { postFormData } from '../../api/api';
import s from './Form.module.scss';

export const Form = () => {
  const [sendState, setSendState] = useState(false);
  const dispatch = useDispatch();
  const imputDataForm = useSelector(inputDataFormSelector);

  const handleChangeState = () => {
    setSendState(!sendState);
    setTimeout(setSendState, 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleChangeState();
    dispatch(postFormData(imputDataForm));
    dispatch(addInputDataForm({ id: '', name: '', email: '', textarea: '' }));
  };

  const handleChange = (e) => {
    //need do ...inputDataForm that copy all data from inputDataForm(example - name, email and etc)
    dispatch(addInputDataForm({ ...imputDataForm, [e.target.id]: e.target.value }));
  };

  return (
    <div className={s.form}>
      <div className={s.form__wrap}>
        <div className={s.form__imgWrap}>
          <img className={s.form__img} src="/img/form-photo.jpg" alt="" />
        </div>

        {sendState ? (
          <div className={s.form__sending}>
            <img className={s.form__sendingImg} src="/img/form-sending.svg" alt="form-sending.svg" />
            <p className={s.form__sendingTitle}>
              <span>вітаємо!</span> дані успішно відправлені!
            </p>
          </div>
        ) : (
          <form className={s.form__inner} onSubmit={onSubmit}>
            <h2 className={s.form__title}>зв'яжіться з нами</h2>
            <p className={s.form__desc}>Форма зворотнього зв'язку</p>

            <label className={s.form__inputTitle} htmlFor="name">
              Імʼя
            </label>
            <input
              className={s.form__input}
              type="text"
              name="name"
              id="name"
              required
              value={imputDataForm.name}
              onChange={handleChange}
            />

            <label className={s.form__inputTitle} htmlFor="email">
              Email
            </label>
            <input
              className={s.form__input}
              type="email"
              name="email"
              id="email"
              required
              pattern="^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              value={imputDataForm.email}
              onChange={handleChange}
            />

            <label className={s.form__inputTitle} htmlFor="area">
              Коментар
            </label>
            <textarea
              className={s.form__textArea}
              name="textarea"
              id="textarea"
              required
              value={imputDataForm.textarea}
              onChange={handleChange}
            ></textarea>

            <div className={s.form__btnWrap}>
              <p className={s.form__text}>
                Відправляючи форму, я приймаю
                <Link to="/user-condition" className={s.form__link}>
                  умови угоди користувача
                </Link>
              </p>
              
              <Btn title="надіслати" className="btn" type="submit" />
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
