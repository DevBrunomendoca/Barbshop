import Paragraph from '../../components/Paragraph'
import SecondCaption from '../../components/SecondCaption'
import Title from '../../components/Title'
import { ContainerAboutPage, ContentBanner, ContentAbout, ContentAboutText, ContentAboutUnit, UnitText, UnitBanner } from './AboutStyle'

export function About() {
  return (
    <ContainerAboutPage>
      <ContentBanner></ContentBanner>

      <ContentAbout>
        <ContentAboutText>
          <Title textTitle='Sobre Nós' />
          <Paragraph textParagraph='No dia 10 de Novembro de 2015, inaugurou a primeira unidade no Setor Marista em Goiânia.' />
          <Paragraph textParagraph='Inspirados pela tradição e determinados a criar um espaço onde os clientes pudessem experimentar mais do que um simples corte de cabelo, estabelecemos nossa barbearia como um refúgio de estilo e autenticidade. Ao longo dos anos, cultivamos uma reputação sólida, baseada na habilidade técnica, atenção aos detalhes e atendimento ao cliente personalizado.' />
          <Paragraph textParagraph=' A Barbearia Navalha Pub é mais do que um estabelecimento; é um lar para a tradição, o estilo e a conexão genuína com nossos clientes.' />
          <Paragraph textParagraph='Cada corte de cabelo é uma expressão única de habilidade artística, refletindo não apenas a dedicação de nossos barbeiros, mas também a história rica que nos trouxe até aqui. Convidamos você a fazer parte desta jornada, onde a excelência é uma tradição, e cada cliente é uma parte vital da nossa história de sucesso.' />
        </ContentAboutText>
        <SecondCaption textSecondCaption='Conheça a nossa unidade' />
        <ContentAboutUnit>
          <UnitBanner>
            <img src="/banner-principal.jpg" alt="" />
          </UnitBanner>
          <UnitText>
            <SecondCaption textSecondCaption='Marista' />
            <Paragraph textParagraph='Localizada em um dos bairros mais tradicionais de Goiânia' />
            <Paragraph textParagraph='Convidamos você a fazer parte desta jornada, onde a excelência é uma tradição, e cada cliente é uma parte vital da nossa história de sucesso.' />
            <Paragraph textParagraph='Av. Mutirão, 2189
            Setor Marista'/>
            <a href="#">AGENDAMENTO WHATSAPP </a>
            <a href="#">NOSSA LOCALIZAÇÃO</a>
          </UnitText>
        </ContentAboutUnit>
      </ContentAbout>
    </ContainerAboutPage>
  )
}