import Button from "../Button";
import Paragraph from "../Paragraph";
import SecondCaption from "../SecondCaption";
import { ContainerPricing, ContentText, ContentTable, CardTable } from "./SectionPricingStyle";

export default function Pricing() {
  return (
    <ContainerPricing>
      <ContentText>
        <SecondCaption textSecondCaption="Nossa tabela de serviços" />
        <Paragraph textParagraph="Explore a excelência em cuidados masculinos com nossos serviços especializados. Na Barbearia Navalha Pub, garantimos cortes de cabelo modernos e tradicionais para atender ao seu estilo único. Confira todos os nossos preços abaixo:" />
        <Button textButton="Conferir mais" />
      </ContentText>
      <ContentTable>
        <CardTable>
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>Corte Tradicional</td><td>R$ 30</td></tr>
          <tr><td>Corte + Barba</td><td>R$ 60</td></tr>
          <tr><td>Barba</td><td>R$ 20</td></tr>
          <tr><td>Corte Infantil (até 12 anos)</td><td>R$ 25</td></tr>
        </CardTable>
        <CardTable>
          <tr><th>Serviço</th><th>Preço (R$)</th></tr>
          <tr><td>Coloração de Barba</td><td>R$ 20</td></tr>
          <tr><td>Hidratação Capilar</td><td>R$ 40</td></tr>
          <tr><td>Coloração de Cabelo</td><td>R$  60</td></tr>
          <tr><td>Design de Sobrancelhas</td><td>R$ 20</td></tr>
        </CardTable>
      </ContentTable>
    </ContainerPricing>
  )
}