import { useNavigate, useParams } from 'react-router-dom'
import { Loading } from '&components/Loading/Loading'
import { routes } from '&utils/routes'
import { Avatar } from '&components/Avatar/Avatar'
import { useQuery } from '@tanstack/react-query'
import { notification } from '&utils/notification'
import { useContacts } from '&contexts/contactsContext'
import * as S from './style'
import { Tab, TabItem } from '&components/Tab/Tabs'
import { useState } from 'react'
import { ContactData } from './ContactData'
import { ContactAddrees } from './ContactAddrees'
import { ContactCompany } from './ContactCompany'

type TSelectedTab = 0 | 1 | 2

export function ViewContact() {
  const { id } = useParams()

  const onTabSelected = (index: number) => {
    setSelectedTab(index as TSelectedTab)
  }
  const [selectedTab, setSelectedTab] = useState<TSelectedTab>(0)
  const navigate = useNavigate()
  const { fetchContact, contactsQuery } = useContacts()

  const { data: contact, isLoading } = useQuery({
    queryKey: ['contact'],
    queryFn: () => fetchContact(id!),
    onError: (error: Error) => {
      notification(error.message, 'error')
      navigate(routes.home.path)
    },
    refetchOnWindowFocus: false,
    retry: false
  })

  if (isLoading || !contact || contactsQuery.isLoading) {
    return <Loading />
  }

  const TabsContent = {
    0: <ContactData contact={contact} />,
    1: <ContactAddrees contact={contact} />,
    2: <ContactCompany contact={contact} />
  }
  return (
    <S.Container>
      <S.ContactHeaderWrapper>
        <S.ContactHeader>
          <div onClick={() => navigate(routes.home.path)}>
            <S.ChevronLeftIcon />
          </div>
          <h1>Contato</h1>

          <div>
            <S.EllipsisVerticalIcon
              onClick={() => navigate(routes.editContact.path(contact?.id!))}
            />
          </div>
        </S.ContactHeader>
        <S.AvatarWrapper>
          <Avatar name={contact?.name} variant="md" />
          <S.AvatarName>{contact?.name}</S.AvatarName>
          <S.AvatarPhone>{contact?.phone}</S.AvatarPhone>
        </S.AvatarWrapper>
      </S.ContactHeaderWrapper>
      <div>
        <Tab onTabSelected={onTabSelected}>
          <TabItem>
            <S.UserIcon />
            Dados
          </TabItem>
          <TabItem>
            <S.MapPinIcon />
            Endereço
          </TabItem>
          <TabItem>
            <S.BuildingStorefrontIcon />
            Empresa
          </TabItem>
        </Tab>
        <div>{TabsContent[selectedTab]}</div>
      </div>
    </S.Container>
  )
}
