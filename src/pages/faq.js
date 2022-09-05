import { Collapse } from 'antd';
const { Panel } = Collapse;

function AppFAQ() {
  return (
    <div className='block faqPage'>
      <div className='container'>
        <h2>FAQ</h2>
        <Collapse accordion defaultActiveKey={['1']}>
          <Panel header="Delivery and collection information" key="1">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="What do I need to know about ordering online?" key="2">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="Returns and refunds" key="3">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="Managing my account" key="4">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="Technical issues" key="5">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="Terms and conditions" key="6">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
          <Panel header="Ratings and reviews" key="7">
            <p>Duo ea legimus legendos. Iusto aliquando quo in. Novum tritani ei pro, solum discere duo ad. Te mea dicant omnium, quem ornatus scribentur te his. Vis ei probatus efficiantur, virtute mentitum qui eu. Ex audiam audire nam, nec et iusto inermis. Tota ceteros definitiones ei vel, ad eos velit congue fabulas, adhuc urbanitas ex has. Modus labore cum ne, cu sea antiopam complectitur, persius necessitatibus at ius. Ut sed oblique intellegebat, nonumes voluptua constituto sed te. Eum idque falli fierent in. Utamur prodesset mei et.</p>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
}

export default AppFAQ;