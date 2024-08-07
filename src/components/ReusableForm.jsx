import { Formik, Field, Form } from 'formik';

const ReusableForm = ({ initialValues, validationSchema, onSubmit, fields, buttonLabel, loading }) => {
  console.log('Rendering ReusableForm'); // Debug log

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Submitting form values:', values); // Debug log
        onSubmit(values); // Call the actual onSubmit function
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="space-y-4">
          {fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name} className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <Field
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              />
              {errors[field.name] && touched[field.name] && (
                <div className="text-red-500 text-xs mt-1">
                  {errors[field.name]}
                </div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            disabled={isSubmitting || loading}
          >
            {isSubmitting ? "Loading..." : buttonLabel}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ReusableForm;
