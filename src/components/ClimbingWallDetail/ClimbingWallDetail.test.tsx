import ClimbingWallDetail from "./ClimbingWallDetail";
import { render, screen } from "@testing-library/react";

describe("Given a ClimbingWallDetail component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a map with an accessible name 'Marker Zoom in Zoom out Leaflet'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="Rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const imageAccessibleName = "Rocódromo Drac de Pedra";

      const expectedImage = screen.queryByRole("img", {
        name: imageAccessibleName,
      }) as HTMLElement;

      expect(expectedImage).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Rubí'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const paragraphAccessibleName = "rubí";

      const expectedParagraph = screen.queryByLabelText(
        paragraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Drac de pedra'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Drac de Pedra";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 2,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Drac de pedra'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName = "Rocódromo situado en Rubí";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Dirección'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Dirección";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 3,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Horario'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Horario";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 3,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Calle de Montserrat'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName = "Calle de Montserrat";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Lunes - Sábado 10:00 a 22:00'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName = "Lunes - Sábado 10:00 a 22:00";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Instalaciones'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Instalaciones";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 3,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Tienda'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName = "Tienda";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name 'Grupos'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName = "Grupos";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Tarifas'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Tarifas";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 3,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a heading with an accessible name 'Datos de contacto'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const headingAccessibleName = "Datos de contacto";

      const expectedParagraph = screen.queryByRole("heading", {
        level: 3,
        name: headingAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a paragraph with an accessible name '45€ mensuales | 35€ mensuales menores de 16 años'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const ParagraphAccessibleName =
        "45€ mensuales | 35€ mensuales menores de 16 años";

      const expectedParagraph = screen.queryByLabelText(
        ParagraphAccessibleName
      );

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'www.dracdepedra.com'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const linkAccessibleName = "www.dracdepedra.com";

      const expectedParagraph = screen.queryByRole("link", {
        name: linkAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name 'dracdepedra@gmail.com'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const linkAccessibleName = "dracdepedra@gmail.com";

      const expectedParagraph = screen.queryByRole("link", {
        name: linkAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });

    test("Then it should show a link with an accessible name '924558711'", () => {
      render(
        <ClimbingWallDetail
          name="Drac de Pedra"
          activities={["Grupos"]}
          address="Calle de Montserrat"
          city="rubí"
          description="Rocódromo situado en Rubí"
          email="dracdepedra@gmail.com"
          installations={["Tienda"]}
          picture1="dracdepedra.jpg"
          picture2="dracdepedra.jpg"
          picture3="dracdepedra.jpg"
          picture4="dracdepedra.jpg"
          prices="45€ mensuales | 35€ mensuales menores de 16 años"
          schedule="Lunes - Sábado 10:00 a 22:00"
          telephone={924558711}
          website="www.dracdepedra.com"
          lat={12345}
          lng={12345}
        />
      );
      const linkAccessibleName = "924558711";

      const expectedParagraph = screen.queryByRole("link", {
        name: linkAccessibleName,
      });

      expect(expectedParagraph).toBeInTheDocument();
    });
  });
});
