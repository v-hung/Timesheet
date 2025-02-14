using Microsoft.AspNetCore.Authorization;
using Timesheet.Server.Constants.Permission;

namespace Timesheet.Server.Authorization;

public class PermissionHandler : AuthorizationHandler<PermissionRequirement>
{

    public PermissionHandler()
    {
    }

    protected override async Task HandleRequirementAsync(AuthorizationHandlerContext authContext, PermissionRequirement requirement)
    {
        if (authContext.User == null)
        {
            await Task.CompletedTask;
            return;
        }

        var permissions = authContext.User.Claims.Where(x => x.Type == ApplicationClaimTypes.Permission &&
            x.Value == requirement.Permission &&
            x.Issuer == "LOCAL AUTHORITY");

        if (permissions.Any())
        {
            authContext.Succeed(requirement);
            await Task.CompletedTask;
        }
    }

}
