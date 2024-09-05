import React, { Component } from "react";
import ErrorLayout from "./ErrorLayout";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    console.log("getDerivedStateFromError");
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error caught by Error Boundary", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorLayout
          title="Something went wrong."
          message="Please try again later."
        />
      );
    }
    return <>{this.props.children}</>;
  }
}

export default ErrorBoundary;
