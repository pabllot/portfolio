import { Button, Container, EmailInput, Form, NameInput, Paragraph, TextArea, Title, Wrapper } from './styles'
import React from 'react'

const Contact = ({english}) => {
  return (
    <Container name='contact'>
        <Form method='POST' action='https://getform.io/f/2a68a64b-b315-46eb-85b7-b06de7ae91d0'>
            <Wrapper>
                <Title> {`${english ? 'Contact' : 'Contato'}`}</Title>
                <Paragraph> {`${english ? 'Submit the form below or send me an email at pabllot07@outlook.com' : 'Preencha os campos abaixo ou me envie um email para pabllot07@outlook.com'}`}</Paragraph>
            </Wrapper>
            <NameInput type='text' placeholder={`${english ? 'Your name' : 'Seu Nome'}`} name='name' />
            <EmailInput type='email' placeholder={`${english ? 'Your email' : 'Seu Email'}`} name='email' />
            <TextArea name='message' placeholder={`${english ? 'Your message' : 'Sua Mensagem'}`} rows='10'></TextArea>
            <Button>{`${english ? 'Send' : 'Enviar'}`}</Button>
        </Form>
    </Container>
  )
}

export default Contact