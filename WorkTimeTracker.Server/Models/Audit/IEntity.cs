namespace Timesheet.Server.Models.Audit;

public interface IEntity
{
}
public interface IEntity<TId> : IEntity
{
	TId Id { get; set; }
}