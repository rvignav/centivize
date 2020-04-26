import React from 'react';

const Feedback = ({ title, subtitle }) => (
  <section>
    <h1 className="text-primary bold pb-1">{title}</h1>
    {subtitle && <h3 className="pb-3">{subtitle}</h3>}
  </section>
);

export default Feedback;
