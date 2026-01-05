import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailProps {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const baseURL = process.env.NODE_ENV === "production" ? "https://qualitydentperu.com/" : "";


export function ContactEmail({
    name,
    phone,
    email,
    message,
}: ContactEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nuevo mensaje de contacto de {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={logoSection}>
                        <Img
                            src={`${baseURL}/static/logo.png`}
                            width="200"
                            height="auto"
                            alt="Quality Dent Logo"
                            style={logo}
                        />
                    </Section>
                    <Heading style={heading}>Nuevo Mensaje de Contacto</Heading>
                    <Text style={subheading}>
                        Un usuario está intentando contactarnos a través del formulario web.
                    </Text>
                    <Hr style={hr} />
                    <Section style={detailsSection}>
                        <Text style={label}>Nombre:</Text>
                        <Text style={value}>{name}</Text>
                        <Text style={label}>Teléfono:</Text>
                        <Text style={value}>{phone}</Text>
                        <Text style={label}>Correo Electrónico:</Text>
                        <Text style={value}>{email}</Text>
                        <Text style={label}>Mensaje:</Text>
                        <Text style={messageText}>{message || "Sin mensaje"}</Text>
                    </Section>
                    <Hr style={hr} />
                    <Text style={footer}>
                        Este correo fue generado automáticamente desde el formulario de
                        contacto de Quality Dent.
                    </Text>
                </Container>
            </Body>
        </Html>
    );
}

const main: React.CSSProperties = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container: React.CSSProperties = {
    backgroundColor: "#ffffff",
    margin: "0 auto",
    padding: "40px 20px",
    maxWidth: "600px",
    borderRadius: "8px",
};

const logoSection: React.CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
};

const logo: React.CSSProperties = {
    margin: "0 auto",
};

const heading: React.CSSProperties = {
    color: "#1a3a5c",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    margin: "20px 0 10px",
};

const subheading: React.CSSProperties = {
    color: "#5dc1d8",
    fontSize: "16px",
    textAlign: "center",
    margin: "0 0 20px",
};

const hr: React.CSSProperties = {
    borderColor: "#e6e6e6",
    margin: "20px 0",
};

const detailsSection: React.CSSProperties = {
    padding: "0 20px",
};

const label: React.CSSProperties = {
    color: "#1a3a5c",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "4px",
};

const value: React.CSSProperties = {
    color: "#333333",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "16px",
};

const messageText: React.CSSProperties = {
    color: "#333333",
    fontSize: "16px",
    marginTop: "0",
    marginBottom: "16px",
    whiteSpace: "pre-wrap",
};

const footer: React.CSSProperties = {
    color: "#8898aa",
    fontSize: "12px",
    textAlign: "center",
};

export default ContactEmail;