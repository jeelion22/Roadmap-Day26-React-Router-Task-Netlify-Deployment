import Card from "./Card";

// This function returns a card related to fullstack course

function Fullstackdevelopment({ fullstackCourse }) {
  return (
    <div className="container">
      <div className="row">
        {fullstackCourse.map((course, index) => {
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

export default Fullstackdevelopment;
