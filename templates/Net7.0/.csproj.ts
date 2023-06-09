export const csproj = `
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net7.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.SpaServices.Extensions" Version="7.0.5" />
  </ItemGroup>
    <PropertyGroup>
		<SpaRoot>{{CLIENT_APP_REF}}</SpaRoot>
	</PropertyGroup>
	<Target Name="PublishRunWebpack" AfterTargets="ComputeFilesToPublish">
		<!-- As part of publishing, ensure the JS resources are freshly built in production mode -->
		<Exec WorkingDirectory="$(SpaRoot)" Command="{{PKM}} install" />
		<Exec WorkingDirectory="$(SpaRoot)" Command="{{PKM}} run build" />
		<!-- Include the newly-built files in the publish output -->
		<ItemGroup>
			<DistFiles Include="$(SpaRoot)dist**" />
			<ResolvedFileToPublish Include="@(DistFiles->'%(FullPath)')" Exclude="@(ResolvedFileToPublish)">
				<RelativePath>%(DistFiles.Identity)</RelativePath>
				<CopyToPublishDirectory>PreserveNewest</CopyToPublishDirectory>
				<ExcludeFromSingleFile>true</ExcludeFromSingleFile>
			</ResolvedFileToPublish>
		</ItemGroup>
	</Target>  
</Project>
`