import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { useFormik } from 'formik';
import Button from '../../components/Button/index';
import messages from './messages';

const validate = values => {
  const errors = {};
  if (!values.task) {
    errors.task = 'Make sure to add a to do!';
  }
  return errors;
};

const TodoForm = ({ save }) => {
  const formik = useFormik({
    initialValues: {
      task: '',
    },
    validate,
    onSubmit: values => {
      save(values.task);
    },
  });

  const saveBtn = <FormattedMessage {...messages.save} />;
  const backBtn = <FormattedMessage {...messages.back} />;

  return (
    <form onSubmit={formik.handleSubmit} className="form-control w-50">
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          <FormattedMessage {...messages.label} />
        </label>
        <input
          onChange={formik.handleChange}
          id="task"
          name="task"
          className="form-control"
          value={formik.values.task}
        />
        {formik.errors.task ? (
          <div>
            <b style={{ color: 'red' }}>{formik.errors.task}</b>
          </div>
        ) : null}
      </div>
      <Button btnType="submit" msg={saveBtn} primary />
      <Link to="/">
        <Button btnType="button" msg={backBtn} />
      </Link>
    </form>
  );
};

TodoForm.propTypes = {
  save: PropTypes.func,
};

export default TodoForm;
