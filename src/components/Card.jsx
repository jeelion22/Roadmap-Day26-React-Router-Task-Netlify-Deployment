
// create a card component and update state of
// specific elements

function Card({ course }) {
  return (
    <div className="post-card trending-card card-group">
      <div className="card border-0 shadow-sm position-relative">
        <a href={course.courseurl} className="card-img-top">
          <img
            width="1500"
            height="1001"
            src={course.img}
            className="attachment-post-thumbnail size-post-thumbnail wp-post-image img-fluid"
            alt="Best Full Stack Development Project Ideas"
            decoding="async"
            sizes="(max-width: 1500px) 100vw, 1500px"
          />{" "}
        </a>
        <div className="card-body" id="card-details">
          <a
            className="card-title text-decoration-none text-dark fs-5 fw-semibold"
            href="https://www.guvi.in/blog/full-stack-development-project-ideas/"
          >
            {course.name}{" "}
          </a>
          <p className="card-author mt-2 mb-0">
            <span id="by">By</span>&nbsp;
            <a className="text-decoration-none" href="#">
              {course.author}
            </a>
          </p>
          <div
            id="card-footer"
            className="mt-2 d-flex flex-row flex-nowrap justify-content-between"
          >
            <p className="mb-0 card-text">{course.date}</p>
            <p className="mb-0 card-text">{course.duration} </p>
          </div>
        </div>
        <div className="position-absolute" id="views-section">
          <div className="card-views d-flex px-2 py-1 align-items-center bg-white rounded-pill">
            <img
              loading="lazy"
              src="https://www.guvi.in/blog/wp-content/themes/guvi-blog/assets/images/icons/eye.svg"
              height="auto"
              width="auto"
              alt="eye-icon"
            />
            &nbsp;
            <p className="m-0">{course.view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
