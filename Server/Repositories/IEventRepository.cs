using Entities;

namespace Repositories.Repositories
{
    public interface IEventRepository
    {
        Task AddAsync(Event eventEntity);
        Task DeleteAsync(int id);
        Task<IEnumerable<Event>> GetAllAsync();
        Task<Event> GetByIdAsync(int id);
        Task UpdateAsync(Event eventEntity);
    }
}