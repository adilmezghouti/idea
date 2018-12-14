import React, { PureComponent } from 'react';

import styles from './Example.css';

class IdeaCreator extends PureComponent {
  render() {
    const { example } = this.props;
    const result = example && example.result ? example.result : null;

    if (result && result.size && result.size > 0) {
      return (
        <div className="container">
          <div className="py-5 text-center">
            <img className="d-block mx-auto mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
            <h2>Checkout form</h2>
            <p className="lead">Below is an example form built entirely with Bootstrap's form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without completing it.</p>
          </div>
          <div className="py-5">
            <form className="needs-validation" noValidate="">
              <div className="mb-3">
                <label htmlFor="username">
                  Username
                </label>
                <div className="input-group">
                  <div className="input-group-prepend">
                      <span className="input-group-text">@</span>
                  </div>
                  <input type="text" className="form-control" id="username" placeholder="Username" required="" />
                  <div className="invalid-feedback">
                      Your username is required.
                  </div>
                </div>
              </div>

              <div className="mb-3">
                  <label htmlFor="email">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                      Please enter a valid email address.
                  </div>
              </div>

              <div className="mb-3">
                <label htmlFor="description">Description</label>
                <textarea type="text" className="form-control" id="description" placeholder="Please describe your idea." required="" />
                <div className="invalid-feedback">
                  Please enter a short description of your great idea.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="address2">
                  One image is worth a thousand words
                  <span className="text-muted">
                    (Optional)
                  </span>
                </label>
                <input type="text" className="form-control" id="image" placeholder="Image that clarifies your idea even more " />
              </div>
              <button className="btn btn-primary btn-lg btn-block mb-3" type="submit">Submit your great Idea!</button>
            </form>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default IdeaCreator;
