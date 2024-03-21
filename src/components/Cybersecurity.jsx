import Card from "./Card";

// create a ract functional component named Cybersecurity
// make it return card for cybersecurity related course

function Cybersecurity({ cybersecurityCourse }) {
  return (
    <div className="container">
      <div className="row">
        {cybersecurityCourse.map((course, index) => {
          return (
            <div className="col-4 mb-3 card-group">
              <Card key={index} course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cybersecurity;
