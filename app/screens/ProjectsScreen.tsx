import React, { FC } from "react"
import { observer } from "mobx-react-lite"
import { TextStyle, ViewStyle } from "react-native"
import { FileCodeIcon } from "lucide-react-native"

import { $styles, spacing } from "app/theme"
import { Button, EmptyPlaceholder, ListView, Screen, Text } from "app/components"
import { TabScreenProps } from "app/navigators"
import { ProjectCard } from "app/components/ProjectCard"

interface ProjectsScreenProps extends TabScreenProps<"ProjectsScreen"> {}


const handleAddProject = () => {
}

const renderEmptyPlaceholder = (
  <EmptyPlaceholder
    icon={FileCodeIcon}
    subtext="You haven’t submitted any projects yet. Submit now to see your recent projects here."
    text="No Projects Submitted"
  />
)

export const ProjectsScreen: FC<ProjectsScreenProps> = observer(function ProjectsScreen() {
  return (
    <Screen style={$root} contentContainerStyle={$styles.flex1} safeAreaEdges={["top"]}>
      <Text preset="heading" text="Projects" style={$heading} />
      <Button onPress={handleAddProject} text="Add Project" style={$buttonStyle}/>
      <ListView
        data={[]}
        estimatedItemSize={50}
        ListEmptyComponent={renderEmptyPlaceholder}
        renderItem={() => <></>}
        showsVerticalScrollIndicator={false}
      />
    </Screen>
  )
})

const $root: ViewStyle = {
  flex: 1,
  paddingHorizontal: spacing.md,
}

const $heading: TextStyle = {
  marginBottom: spacing.md,
}

const $buttonStyle: TextStyle = {
  marginBottom: spacing.md
}

