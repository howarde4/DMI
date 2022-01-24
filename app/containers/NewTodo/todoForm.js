import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../../components/button';

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

  return (
    <form onSubmit={formik.handleSubmit} className="form-control w-50">
      <div className="mb-3">
        <label htmlFor="task" className="form-label">
          Task:
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
      <Button primary type="submit">
        Save
      </Button>
      <Link to="/">
        <Button type="button">Back</Button>
      </Link>
    </form>
  );
};

export default TodoForm;
