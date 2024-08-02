import './App.css';
import { useState } from 'react';

function App() {
  const initialData = {
    semester1: [
      { id: 1687315664863, name: "Subject 1" },
      { id: 299486184961, name: "Subject 2" },
    ],
    semester2: [
      { id: 329948618496, name: "Subject 3" },
      { id: 429948618496, name: "Subject 4" },
    ],
    semester3: [
      { id: 529948618496, name: "Subject 5" },
      { id: 629948618496, name: "Subject 6" },
    ],
    semester4: [
      { id: 729948618496, name: "Subject 7" },
      { id: 829948618496, name: "Subject 8" },
    ],
    semester5: [
      { id: 929948618496, name: "Subject 9" },
      { id: 1029948618496, name: "Subject 10" },
    ],
    semester6: [
      { id: 1129948618496, name: "Subject 11" },
      { id: 1229948618496, name: "Subject 12" },
    ],
  };

  const [data, setData] = useState(initialData);
  const [editMode, setEditMode] = useState(false);

  const handleEditChange = (e, id, semester) => {
    const { name, value } = e.target;
    setData(prevData => ({
      ...prevData,
      [semester]: prevData[semester].map(item => (item.id === id ? { ...item, [name]: value } : item))
    }));
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      <div className="header">
        <h1>About the course - B.Com</h1>
      </div>
      <div className="content">
        <div className="section1">
          <h2>Course Overview</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
            nostrum officiis aut iure minima quisquam, expedita laboriosam,
            accusamus magnam consequatur non dolor at vitae voluptates beatae
            sed labore, nam blanditiis? A, fugit. Excepturi nesciunt illo
            eveniet vero! Non a, ut eos distinctio voluptas magni perferendis
            magnam asperiores doloremque dolorum at enim ipsa, nesciunt
            molestias, harum adipisci expedita saepe autem mollitia.
          </p>
          <br />
          <button className="inquire-now">Inquire Now</button>
        </div>
        <div className="section2">
          <div className="left">
            <h2>Vision</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              eum? Quod, accusantium aliquid? Delectus atque ullam perspiciatis
              sapiente. Perferendis rerum quidem asperiores nostrum repellendus
              sapiente repudiandae fugiat in ea reiciendis?
            </p>
          </div>
          <div className="right">
            <h2>Mission</h2>
            <hr />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
              pariatur dolor perspiciatis repellat ratione est nam voluptatum,
              earum esse impedit deserunt. Rerum quaerat nam natus soluta
              explicabo quod dolorem ipsum?
            </p>
          </div>
        </div>
        <div className="section3">
          <h2>List of Subjects for the Three Year BCom</h2>
          <hr />
          <button onClick={toggleEditMode} className="edit-button">
            {editMode ? "Save Changes" : "Edit Subjects"}
          </button>
          <div className="subjects">
            {['fy', 'sy', 'ty'].map((year, index) => (
              <div key={year} className={`${year} mt-4`}>
                <h1 className="flex justify-center text-2xl font-bold">
                  {index === 0 ? 'FY BCom' : index === 1 ? 'SY BCom' : 'TY BCom'}
                </h1>
                <div className="table-container">
                  <table>
                    <thead>
                      <tr>
                        <th>Semester {index * 2 + 1}</th>
                        <th>Semester {index * 2 + 2}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[data[`semester${index * 2 + 1}`], data[`semester${index * 2 + 2}`]].map((semesterData, semesterIndex) => (
                        <tr key={semesterIndex}>
                          {semesterData.map((item) => (
                            <td key={item.id}>
                              {editMode ? (
                                <input
                                  type="text"
                                  name="name"
                                  value={item.name}
                                  onChange={(e) => handleEditChange(e, item.id, `semester${index * 2 + semesterIndex + 1}`)}
                                  className="border p-1"
                                />
                              ) : (
                                item.name
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
