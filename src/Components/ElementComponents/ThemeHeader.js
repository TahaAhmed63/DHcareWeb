import React from 'react'

const ThemeHeader = (props) => {
    const {line1head,line2head} =props;
  return (
    <div className="section-heads">
        <div className="wpb_text_column wpb_content_element section-heads">
  <div className="wpb_wrapper">
    <h2 style={{ textAlign: "center" }}>
  {line1head}
      <br />
    {line2head}
    </h2>
  </div>
</div>
    </div>
  )
}

export default ThemeHeader