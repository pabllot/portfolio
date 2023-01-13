import { Container, Image, Paragraph, Skill, SkillsContainer, SubContainer, SubTitle, Title, TitleWrapper } from './styles';
import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';
import Styled from '../../assets/styled-components.png';
import Typescript from '../../assets/typescript.svg';

const Skills = ({english}) => {
  return (
    <Container name='skills'>
        <SubContainer>
            <TitleWrapper>
                <Title>{`${english ? 'Skills' : 'Habiidades'}`}</Title>
                <SubTitle>{`${english ? 'These are some of the technologies I use the most in my projects.' : 'Essas são as tecnologias que tenho usado em meus projetos'}`}</SubTitle>
            </TitleWrapper>

            <SkillsContainer>
                <Skill>
                   <Image src={HTML} alt='html icon'/>
                   <Paragraph>HTML</Paragraph>
                </Skill>
                <Skill>
                   <Image src={CSS} alt='html icon'/>
                   <Paragraph>CSS</Paragraph>
                </Skill>
                <Skill>
                   <Image src={JavaScript} alt='html icon'/>
                   <Paragraph>JavaScript</Paragraph>
                </Skill>
                <Skill>
                   <Image src={Typescript} alt='html icon'/>
                   <Paragraph>Typescript</Paragraph>
                </Skill>
                <Skill>
                   <Image src={ReactImg} alt='html icon'/>
                   <Paragraph>React</Paragraph>
                </Skill>
                <Skill>
                   <Image src={Styled} alt='html icon'/>
                   <Paragraph className='my-4 text-1xl'>Styled-components</Paragraph>
                </Skill>
                <Skill>
                   <Image src={Node} alt='html icon'/>
                   <Paragraph>Node</Paragraph>
                </Skill>
                <Skill>
                   <Image src={GitHub} alt='html icon'/>
                   <Paragraph>Github</Paragraph>
                </Skill>
            </SkillsContainer>
        </SubContainer>
    </Container>
  )
}

export default Skills