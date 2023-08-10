const Footer = () =>
{
  return <>
    <footer className="bg-dark text-center text-white">

      <div className="container p-2 pb-2">

        <section className="mb-4">

          <a
            className="btn btn-primary btn-floating m-4"
            style={{ backgroundColor: "#55acee" }}
            href="https://twitter.com/elonmusk"
            role="button"
          ><i className="fab fa-twitter"></i
          ></a>


          <a
            className="btn btn-primary btn-floating m-4"
            style={{ backgroundColor: "#0082ca" }}
            href="https://lists.linkedin.com/2015/top-voices/influencers"
            role="button"
          ><i className="fab fa-linkedin-in"></i
          ></a>

          <a
            className="btn btn-primary btn-floating m-4"
            style={{ backgroundColor: "#333333" }}
            href="https://www.instagram.com/elonmusk/"
            role="button"
          ><i className="fab fa-github"></i
          ></a>
          <p className="text-center fs-5">© Made By Manav Seth™</p>
        </section>

      </div>

    </footer>
  </>
}
export default Footer